package com.rafaelfachinelli.users;

import java.util.stream.LongStream;

import com.rafaelfachinelli.users.model.User;
import com.rafaelfachinelli.users.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UsersApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository repository) {
		return args -> {
			repository.deleteAll();
			LongStream.range(1, 11).mapToObj(i -> {
				User u = new User();
				u.setName("User " + i);
				u.setEmail("user" + i + "@email.com");
				u.setPhone("(11) 9999-9999");
				return u;
			}).map(v -> repository.save(v)).forEach(System.out::println);
		};
	}

}
