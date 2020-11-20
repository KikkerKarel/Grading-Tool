package gps.s3.correctingtool.repo;

import gps.s3.correctingtool.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
}