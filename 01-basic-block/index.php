<?php

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block JavaScript and CSS for the editor
 */
function block_examples_01_plugin_editor_scripts() {
	// Enqueue block editor JS
	wp_register_script(
		'block-example-01-basic-block',
		plugins_url( 'block.build.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	register_block_type( 'block-examples/block-examples-01-basic-block', array(
		'editor_script' => 'block-example-01-basic-block',
	));
}
// Hook the enqueue functions into the editor
add_action( 'init', 'block_examples_01_plugin_editor_scripts' );
