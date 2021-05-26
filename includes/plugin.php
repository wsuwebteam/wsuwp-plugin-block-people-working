<?php namespace WSUWP\Plugin\Blocks\People;


class Plugin {

    protected static $version = '0.0.1';

    public static function get( $property ) {

        switch ( $property ) {

            case 'version':
                return self::$version;

            case 'plugin_dir':
                return plugin_dir_path( dirname( __FILE__ ) );

            case 'plugin_url':
                return plugin_dir_url( dirname( __FILE__ ) );

            case 'template_dir':
                return plugin_dir_path( dirname( __FILE__ ) ) . '/templates';

            case 'class_dir':
                return plugin_dir_path( dirname( __FILE__ ) ) . '/classes';

            default:
                return '';

        }

    }


    public function init() {

        // require_once __DIR__ . '/scripts.php';

        add_action( 'init', function(){
            // Block Editor
            wp_register_script(
                'wsuwp-plugin-block-people-scripts',
                Plugin::get('plugin_url') . 'assets/dist/index.js',
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor')
            );

            wp_register_style(
                'wsuwp-plugin-block-people-styles',
                Plugin::get('plugin_url') . 'assets/dist/index.css',
                array()
            );

            register_block_type(
                'create-block/myblock', array(
                    'render_callback' => array(__CLASS__, 'render_block'),
                    'api_version' => 2,
                    'editor_script' => 'wsuwp-plugin-block-people-scripts',
                    'editor_style' => 'wsuwp-plugin-block-people-styles'
                )
            );
        });

    }

    function render_block ( $attributes ) {
        $request = new \WP_REST_Request( 'GET', '/peopleapi/v1/people' );
        $request->set_query_params($attributes);
        $response = rest_do_request( $request );
        $server = rest_get_server();
        $data = $server->response_to_data( $response, false );
        $profiles = json_decode( strval($data) );

        ob_start();

        include Plugin::get('template_dir') . '/default.php';

		return ob_get_clean();
    }

}


(new Plugin)->init();
