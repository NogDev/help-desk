package com.nog.firstspringboot.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@RequestMapping("/show")
	public String show() {
		return "Hello, first Spring Boot project";
	}
}
