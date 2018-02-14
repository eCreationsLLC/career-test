<?php

add_action( 'wp_enqueue_scripts', function() {
	wp_register_script( 'font-awesome', 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' );
	wp_enqueue_script( 'font-awesome' );
}, 20 );

add_filter( 'script_loader_tag', function( $tag, $handle ) {
	if ( 'font-awesome' === $handle ) {
		$tag = str_replace( ' src', ' defer src', $tag );
	}

	return $tag;
}, 10, 2 );

add_action( 'after_setup_theme', function() {
	unregister_nav_menu( 'social' );
	register_nav_menu( 'social', 'Custom Social Media Menu' );
}, 20 );