package com.app.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Levantosina
 */

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

    boolean existsCustomerByEmail(String email);
    boolean existsCustomerById(Integer id);

}
