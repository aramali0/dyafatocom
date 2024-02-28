package fsts.mrurespect.dyafatocom.DTO;

import fsts.mrurespect.dyafatocom.Enums.Sexe;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HostDTO {
    private String username;
    private String password;
    private String name;
    private String lastName;
    private String email;
    private String tel;
    private String sexe;
    private Integer age;
    private String cin;
    private String description;
    private String language;
    private byte[] image;
}
