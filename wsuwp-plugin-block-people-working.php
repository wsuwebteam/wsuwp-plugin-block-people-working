<?php
/**
 * Plugin Name: WSUWP Block People
 * Plugin URI: https://github.com/wsuwebteam/wsuwp-plugin-people-api
 * Description: Gutenburg block for displaying profiles from the people directory
 * Version: 0.0.1
 * Requires PHP: 7.0
 * Author: Washington State University, Dan White
 * Author URI: https://web.wsu.edu/
 * Text Domain: wsuwp-plugin-block-people-working
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

// Initiate plugin
require_once __DIR__ . '/includes/plugin.php';
