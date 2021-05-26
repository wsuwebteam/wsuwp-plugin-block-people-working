const { __ } = wp.i18n;
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { TextControl, SelectControl, PanelBody, PanelRow } = wp.components;

import React, { useState, useEffect } from 'react';
import './editor.scss';


export default function Edit({ className, attributes, setAttributes }) {
    const [profiles, setProfiles] = useState([]);
    const attributeKeys = Object.keys(attributes);
    const debouncedAttributes = useDebounce(attributes, 1000);

    useEffect(() => {
        async function loadProfiles(){
            // build url params based on attributes
            const params = attributeKeys.reduce(function(acc, curr, idx){
                if(attributes[curr]){
                    acc.push(curr.replace('_', '-') + '=' + attributes[curr]);
                }

                return acc;
            }, []).join('&');

            // make request
            const response = await fetch('http://peopleapi.local/wp-json/peopleapi/v1/people?' + params);

            if ( !response.ok ) { return; }

            // update state
            const profilesJson = await response.json();
            setProfiles(JSON.parse(profilesJson));
        }

        loadProfiles();
    }, [debouncedAttributes]); // only run on init and when attributes are changed

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody
                    title="Directory Filters"
                    initialOpen={true}
                >
                    <PanelRow>
                        <TextControl
                            label="Number of Results"
                            help="Number of results per page. 'All' returns all profiles. Defaults to 10."
                            value={ attributes.count }
                            onChange={(newval) => setAttributes({ count: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="Page"
                            help="Integer representing the page of results to return"
                            value={ attributes.page }
                            onChange={(newval) => setAttributes({ page: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="Network IDs"
                            help="Comma delimited list of people network ids"
                            value={ attributes.nid }
                            onChange={(newval) => setAttributes({ nid: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="University Category"
                            help="Comma delimited list of wsuwp_university_category taxonomy slugs"
                            value={ attributes.university_category }
                            onChange={(newval) => setAttributes({ university_category: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="University Location"
                            help="Comma delimited list of wsuwp_university_location taxonomy slugs"
                            value={ attributes.university_location }
                            onChange={(newval) => setAttributes({ university_location: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <TextControl
                            label="University Organization"
                            help="Comma delimited list of wsuwp_university_org taxonomy slugs"
                            value={ attributes.university_organization }
                            onChange={(newval) => setAttributes({ university_organization: newval })}
                        />
                    </PanelRow>

                    <PanelRow>
                        <SelectControl
                            label="Photo Size"
                            help="Photo size (thumbnail, medium, medium_large, large, full). Defaults to medium."
                            value={ attributes.size }
                            onChange={(newval) => setAttributes({ size: newval })}
                            options={ [
                                { label: 'Thumbnail', value: 'thumbnail' },
                                { label: 'Medium', value: 'medium' },
                                { label: 'Medium Large', value: 'medium_large' },
                                { label: 'Large', value: 'large' },
                                { label: 'Full', value: 'full' },
                            ]}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div className="profiles">
                {profiles.map((p, index) =>
                    <div className="profile" key={index}>
                        <div className="profile__img-container">
                            <img className="profile__img" src={p.photo}/>
                        </div>

                        <h2 className="profile__name">{p.name}</h2>

                        {p.title.map((t, index) =>
                            <div key={index}>{t}</div>
                        )}

                        {p.university_organization.map((o, index) =>
                            <div key={index}>{o.name}</div>
                        )}
                    </div>
                )}
            </div>

        </div >
    );
}


// useDebounce Hook - https://usehooks.com/useDebounce/
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }
