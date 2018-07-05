<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('assets/css/style.min.css') ?>" />
</head>
<body>
    <div class="loader-progress">
        <div class="spinner"></div>
    </div>

    <ul>
        <li><a href="<?php echo site_url();?>" title="hello word !!!">Home</a></li>
        <li><a href="<?php echo site_url('pushstate');?>" title="page 1">Pushstate</a></li>
    </ul>

    <input type="hidden" id="base_url" value="<?php echo base_url();?>"/>