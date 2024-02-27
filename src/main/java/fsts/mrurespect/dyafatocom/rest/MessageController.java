package fsts.mrurespect.dyafatocom.rest;

import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;
import fsts.mrurespect.dyafatocom.entity.messagerie.Message;
import fsts.mrurespect.dyafatocom.entity.messagerie.User;
import fsts.mrurespect.dyafatocom.rest.exception.NotFoundException;
import fsts.mrurespect.dyafatocom.service.ConversationService;
import fsts.mrurespect.dyafatocom.service.MessageService;
import fsts.mrurespect.dyafatocom.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/api")
public class MessageController {
    private final UserService userService ;
    private final ConversationService conversationService;
    private final MessageService messageService;

    @Autowired
    MessageController(UserService service, ConversationService conversationService, MessageService messageService) {
        this.userService = service;
        this.conversationService = conversationService;
        this.messageService = messageService;
    }

    @GetMapping("/login")
    public ResponseEntity<String> main(HttpSession session) {
        if (session.getAttribute("user") != null) {
            return ResponseEntity.ok("connected" + session.getAttribute("user"));
        } else {
            throw new NotFoundException("Not connected ! ");
           // return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user,HttpSession session) {
        User userx = userService.getUser(user);
        if (userx != null) {
            System.out.println("User exists: " + userx.id);
            userx.setId(userx.id);
            session.setAttribute("user",userx);
            return ResponseEntity.ok().body((User) session.getAttribute("user"));
        } else {
            throw new NotFoundException("User not found - " + user.getUsername());
        }
    }

    @GetMapping("/conversations")
    public ResponseEntity<List<Conversation>> home(Model model,HttpSession session){
        if (session.getAttribute("user")==null){
          //  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            throw new NotFoundException("Not connected");
        }
        System.out.println("holla");
       User user=(User) session.getAttribute("user");
        User current =userService.getUser(user.id);
        List<Conversation> conversations=conversationService.getConversation(current);
        return ResponseEntity.ok(conversations);
    }

    @GetMapping("/remove")
    public  ResponseEntity<String> remove(HttpSession session){
        session.invalidate();
        return ResponseEntity.ok().body("deconnected successfully");
    }
    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody Message message,HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user !=null){
            message.setSender(user);
            message.setTime(new Date());
            Conversation conversation =conversationService.getConversationById(message.getConversation().getId());
            message.setConversation(conversation);
            messageService.addMessage(message);
            System.out.println("Received message: " + message);
            return ResponseEntity.ok().body("message added successfully");

        }else  throw new NotFoundException("Not connected");

    }
    @GetMapping("/")
    public String redirect(){
        return "redirect:/api/login";
    }
}
