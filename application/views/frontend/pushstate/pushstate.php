<ul id="menu-nav">
    <li><a href="<?php echo site_url('pushstate/page-1');?>" title="page 1">Page 1</a></li>
    <li><a href="<?php echo site_url('pushstate/page-2');?>" title="page 2">Page 2</a></li>
    <li><a href="<?php echo site_url('pushstate/page-3');?>" title="page 3">Page 3</a></li>
</ul>

<div class="content_show">
    <?php
        if ($this->uri->segment(2) == 'page-2') {
			echo '<h1>Page 2</h1><img src="http://seedresort.d/wp-content/uploads/2016/02/IMG_2226-1140x590.jpg"/>';
        } elseif($this->uri->segment(2) == '') {
            echo "<h1>Select Page</h1>";
        } else {
            echo '<h1>'.ucwords(str_replace('-',' ',$this->uri->segment(2))).'</h1>';
        }
    ?>
</div>