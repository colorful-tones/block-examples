<?php

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue block JavaScript and CSS for the editor
 */
function block_examples_02_plugin_editor_scripts() {
	// Enqueue block editor JS
	wp_register_script(
		'block-example-02-stylesheets-block',
		plugins_url( 'block.build.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	// Enqueue block editor styles
	wp_register_style(
		'block-example-02-stylesheets-block',
		plugins_url( 'editor.css', __FILE__ ),
		[ 'wp-edit-blocks' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	register_block_type( 'block-examples/block-examples-02-stylesheets-block', array(
		'editor_script' => 'block-example-02-stylesheets-block',
		'style'         => 'block-example-02-stylesheets-block',
	));
}
// Hook the enqueue functions into the editor
add_action( 'init', 'block_examples_02_plugin_editor_scripts' );

function block_examples_02_frontend() {
	if ( is_admin() ) {
		return;
	}

	wp_enqueue_style(
		'block-examples-02',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}

add_action( 'enqueue_block_assets', 'block_examples_02_frontend' );
