package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.dao.UserDao;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserDao userDao ;
    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User getUser(User user) {
         List<User> users =userDao.findAll();
        System.out.println(users);
        for (User tempUser:users) {
            if (Objects.equals(tempUser.getUsername(), user.getUsername())&&
                    Objects.equals(tempUser.getPassword(), user.getPassword())
            ){
                return tempUser ;
            }
        }
        return null ;
    }

    @Override
    public User getUser(int id) {
        Optional<User> optionalUser= userDao.findById(id);
        return optionalUser.orElse(null);
    }

    @Override
    public void save(User user) {
        userDao.save(user);
    }
}
