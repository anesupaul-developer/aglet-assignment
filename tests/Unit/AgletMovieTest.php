<?php

it('shows the home page', function () {
    $this->get('/movies')->assertOk();
});
