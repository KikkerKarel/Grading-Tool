package gps.s3.correctingtool.Repositories;

import org.springframework.data.repository.CrudRepository;
import gps.s3.correctingtool.Entities.*;

public interface UserRepository extends CrudRepository<User, Integer> {
}

