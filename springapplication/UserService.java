package com.sprinapplication.springapp;

import java.util.List;


import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Service
public class UserService {

	  @SuppressWarnings("unchecked")
	@RequestMapping(value = "/user", produces = "application/json")
	  
	 
		
	  public List<User> getuser()
	  
	  {  HttpHeaders headers = new HttpHeaders();
		  HttpEntity<User> httpEntity = new HttpEntity<User>(headers);
		  ResponseEntity<User> entity = new RestTemplate().exchange(
	                "http://localhost:3000/users", HttpMethod.GET,httpEntity,
	                User.class);
		 List<User> listofusers = (List<User>) entity.getBody();
		return listofusers;
	      
	      
	  }

	
}

