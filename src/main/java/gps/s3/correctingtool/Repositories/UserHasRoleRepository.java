package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.Exam;
import gps.s3.correctingtool.Entities.User_has_role;
import org.springframework.data.repository.CrudRepository;

public interface UserHasRoleRepository extends CrudRepository<User_has_role, Integer> {
}
