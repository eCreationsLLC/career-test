<?php
/**
 * Created by PhpStorm.
 * User: Franklin
 * Date: 2/12/2018
 * Time: 12:44 PM
 */

function search_user_meta() {
	global $wpdb;

	$keyword = $_GET['s'];

	$rows = $wpdb->get_results( 'SELECT * FROM wp_usermeta WHERE meta_value LIKE %' . $keyword . '%' );
	return $rows;
}