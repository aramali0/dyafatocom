package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.DTO.HostDTO;
import fsts.mrurespect.dyafatocom.DTO.LoginRequest;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;

public interface UserService {
    User getUser(User user);
    User getUser(int id);
    void save(User user);
    User login(LoginRequest loginRequest);
    public Host signup(HostDTO hostDTO);

}
