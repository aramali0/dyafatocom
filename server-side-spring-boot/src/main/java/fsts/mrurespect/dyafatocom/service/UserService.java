package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.entity.messagerie.User;

public interface UserService {
    User getUser(User user);
    User getUser(int id);
    void save(User user);
}
