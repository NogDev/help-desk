package com.nog.firstspringmongo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.nog.firstspringmongo.domain.Studenty;

@RepositoryRestResource(collectionResourceRel = "student", path = "student")
public interface StudentRepository extends MongoRepository<Studenty, String>{
	
	public List<Studenty> findByNameLikeIgnoreCase(String name);
}
