package fsts.mrurespect.dyafatocom.controller;

import fsts.mrurespect.dyafatocom.DTO.HostDTO;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/host")
@CrossOrigin
@AllArgsConstructor
public class HostController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody HostDTO hostDTO) {
            System.out.println("test test ");
        try {
            Host savedHost = userService.signup(hostDTO);
            return new ResponseEntity<>(savedHost, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
