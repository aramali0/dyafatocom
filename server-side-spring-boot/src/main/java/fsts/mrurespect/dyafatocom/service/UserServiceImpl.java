package fsts.mrurespect.dyafatocom.service;

import fsts.mrurespect.dyafatocom.DTO.HostDTO;
import fsts.mrurespect.dyafatocom.DTO.LoginRequest;
import fsts.mrurespect.dyafatocom.Enums.Role;
import fsts.mrurespect.dyafatocom.Enums.Sexe;
import fsts.mrurespect.dyafatocom.dao.UserDao;
import fsts.mrurespect.dyafatocom.entity.Host;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    @Autowired
    private UserDao hostRepository;

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




    @Override
    public User login(LoginRequest loginRequest) {
        String username = loginRequest.getUserName();
        String password = loginRequest.getPassword();

        // Validate inputs or perform any necessary checks

        // Call UserRepository to find the user
        User user = userDao.findByUsernameAndPassword(username, password);

        // Check if user exists
        if (user == null) {
            // Throw a ResponseStatusException with a BAD_REQUEST status
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User does not exist");
        }

        return user;
    }



        public Host signup(HostDTO hostDTO) {
            Host host = convertToEntity(hostDTO);
            return hostRepository.save(host);
        }

        private Host convertToEntity(HostDTO hostDTO) {
            Host host = new Host();
            host.setUsername(hostDTO.getUsername());
            host.setPassword(hostDTO.getPassword());
            host.setName(hostDTO.getName());
            host.setLastName(hostDTO.getLastName());
            host.setEmail(hostDTO.getEmail());
            host.setTel(hostDTO.getTel());
            host.setSexe(Sexe.valueOf(hostDTO.getSexe().toUpperCase()));
            host.setAge(hostDTO.getAge());
            host.setCin(hostDTO.getCin());
            host.setDescription(hostDTO.getDescription());
            host.setRole(Role.HOST);

            return host;
        }


}
