<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$this->load->view('frontend/head');
		$this->load->view('frontend/home');
		$this->load->view('frontend/foot');
	}

	public function pushstate_show()
	{
		$this->load->view('frontend/head');
		$this->load->view('frontend/pushstate/pushstate');
		$this->load->view('frontend/foot');
	}

	public function pushstate_show_ajax()
	{

		$title = $this->input->post('title');

		if ($title == 'page 2') {
			echo '<h1>Page 2</h1><img src="http://seedresort.d/wp-content/uploads/2016/02/IMG_2226-1140x590.jpg"/>';
		} else {
			echo '<h1>'.ucwords($title).'</h1>';
		}
	}
}
