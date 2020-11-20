package gps.s3.correctingtool.user;

import gps.s3.correctingtool.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepo extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}