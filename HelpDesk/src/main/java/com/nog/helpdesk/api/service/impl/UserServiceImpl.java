package com.nog.helpdesk.api.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nog.helpdesk.api.entity.User;
import com.nog.helpdesk.api.repository.UserRepository;
import com.nog.helpdesk.api.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	private UserRepository userRepository;
	
	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User createOrUpdate(User user) {
		return userRepository.save(user);
	}

	@Override
	public User findById(String id) {
		return userRepository.findById(id).get();
	}

	@Override
	public void delete(String id) {
		this.userRepository.deleteById(id);
	}

	@Override
	public Page<User> findAll(int page, int count) {
		Pageable pageable = PageRequest.of(page, count);
		return userRepository.findAll(pageable);
	}

}
