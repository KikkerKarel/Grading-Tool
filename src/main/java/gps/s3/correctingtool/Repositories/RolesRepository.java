package gps.s3.correctingtool.Repositories;

import gps.s3.correctingtool.Entities.Exam;
import gps.s3.correctingtool.Entities.Role;
import org.springframework.data.repository.CrudRepository;

public interface RolesRepository extends CrudRepository<Role, Integer> {
}
