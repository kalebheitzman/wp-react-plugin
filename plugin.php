<?php
/**
 * Frontend Uploader
 *
 * @package           WpReactPlugin
 * @author            Kaleb Heitzman
 * @copyright         2019 Kaleb Heitzman
 * @license           GPL-3.0
 *
 * @wordpress-plugin
 * Plugin Name:       Sample WP React Plugin
 * Plugin URI:        https://github.com/kalebheitzman/wp-react-plugin
 * Description:       A sample plugin for including ReactJS apps in your WordPress Site.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Kaleb Heitzman
 * Author URI:        https://heitzman.co
 * Text Domain:       wpreactplugin
 * Domain Path:       /languages
 */

if ( ! function_exists( 'wp_react_plugin_shortcode' ) ) {
	/**
	 * WpReactPlugin Shortcode
	 *
	 * We use a shortcode to embed our react app on any given post, page, widget,
	 * and etc. Usage is [wp_react_plugin]
	 *
	 * @return string
	 * @since 1.0.0
	 */
	function wp_react_plugin_shortcode() {
		wp_enqueue_script( 'wpreactplugin-script' );
		return '<div id="wp-react-plugin"></div>';
	}
	add_shortcode( 'wp_react_app', 'wp_react_plugin_shortcode' );
}

/**
 * WP React Plugin Scripts
 *
 * Register the ReactJS App Script thats needed for our plugin to work.
 *
 * @since  1.0.0
 */
function wp_react_plugin_scripts() {

	wp_register_script(
		'wpreactplugin-script',
		plugin_dir_url( __FILE__ ) . 'dist/bundle.js',
		array(
			'jquery',
			'wp-element',
		),
		'1.0.0',
		true
	);

}
add_action( 'wp_enqueue_scripts', 'wp_react_plugin_scripts' );
