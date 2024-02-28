package fsts.mrurespect.dyafatocom.controller;

import fsts.mrurespect.dyafatocom.DTO.LoginRequest;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import fsts.mrurespect.dyafatocom.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
@AllArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest loginRequest) {
        try {
            System.out.println("login request : "+loginRequest);
            // Call the login method of the UserService
            User user = userService.login(loginRequest);
            System.out.println(user);
            // Return the user in the response body with status code 200 (OK)
            return ResponseEntity.ok(user);
        } catch (ResponseStatusException ex) {
            // If ResponseStatusException is thrown by the service, return the exception message with appropriate status code
            return ResponseEntity.status(ex.getStatusCode()).body(null);
        }
    }
}
