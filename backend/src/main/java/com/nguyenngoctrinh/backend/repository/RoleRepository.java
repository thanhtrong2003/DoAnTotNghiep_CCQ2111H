package com.nguyenngoctrinh.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyenngoctrinh.backend.entity.Role;
public interface RoleRepository extends JpaRepository<Role, Long>{
    
}

