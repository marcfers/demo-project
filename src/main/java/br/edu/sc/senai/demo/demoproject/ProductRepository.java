package br.edu.sc.senai.demo.demoproject;

import org.springframework.data.repository.CrudRepository;

interface ProductRepository extends CrudRepository<ProductEntity, Long> {

}
