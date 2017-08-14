<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->group(['prefix' => 'api'], function() use ($app) {
    $app->get('links', [
        'as' => 'links.index', 'uses' => 'LinksController@index'
    ]);

    $app->post('links', [
        'as' => 'links.store', 'uses' => 'LinksController@store'
    ]);

    $app->delete('links/{id}', [
        'as' => 'links.destroy', 'uses' => 'LinksController@destroy'
    ]);
});