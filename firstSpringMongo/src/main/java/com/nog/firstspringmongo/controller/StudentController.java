package com.nog.firstspringmongo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nog.firstspringmongo.domain.Studenty;
import com.nog.firstspringmongo.repository.StudentRepository;


@RestController
public class StudentController {
	@Autowired
	StudentRepository repository;
	
	@RequestMapping(value="/student", method= RequestMethod.GET)
	public List<Studenty> listStudenty(){
		return this.repository.findAll();
	}
	
	@RequestMapping(value="/student", method= RequestMethod.POST)
	public Studenty saveStudent(@RequestBody Studenty studenty) {
		return this.repository.save(studenty);
	}
	@RequestMapping(value="/student/{id}", method= RequestMethod.GET)
	public Optional<Studenty> finfById(@PathVariable String id) {
		return this.repository.findById(id);
	}
	
	@RequestMapping(value="/student/{name}/name", method= RequestMethod.GET)
	public List<Studenty> findByName(@PathVariable String name) {
		return this.repository.findByNameLikeIgnoreCase(name);
	}
}
