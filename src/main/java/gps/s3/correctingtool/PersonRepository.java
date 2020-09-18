package gps.s3.correctingtool;

import org.springframework.data.repository.CrudRepository;
import gps.s3.correctingtool.Person;


public interface PersonRepository extends CrudRepository<Person, Integer> {
}
