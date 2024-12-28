package com.backend.ecom_proj_four.controller;

import com.backend.ecom_proj_four.model.Product;
import com.backend.ecom_proj_four.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {
    @Autowired
    ProductService service;
    @RequestMapping("/")
    public String greet(){
        return "Welcome to SpringBoot";
    }
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProd(){
        return new ResponseEntity<>(service.getAllProd(), HttpStatus.OK);
    }
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable int id){
        Product product=service.getProduct(id);
        if(product!=null)
            return new ResponseEntity<>(product,HttpStatus.OK);
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile){
        try {
            Product product1 = service.addProduct(product, imageFile);
            return new ResponseEntity<>(product1,HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/product/{prodid}/image")
    public ResponseEntity<byte[]> getProductByImageId(@PathVariable
                                                      int prodid){
        Product prod=service.getProduct(prodid);
        byte[] img=prod.getImageData();
        return ResponseEntity.ok().contentType(MediaType.valueOf(prod.getImageType())).body(img);
    }
    @PutMapping("/product/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id,@RequestPart Product product, @RequestPart MultipartFile imageFile){
        Product product1=null;
        try{
            product1=service.updateProduct(id,product,imageFile);
        }
        catch(Exception e){
            return new ResponseEntity<>("Failed to  Update",HttpStatus.BAD_REQUEST);
        }
        if(product1!=null){
            return new ResponseEntity<>("Updated",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Failed to  Update",HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        Product prod1=service.getProduct(id);
        if(prod1!=null){
            service.deleteProduct(id);
            return new ResponseEntity<>("Deleted",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Unable to delete",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/product/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        System.out.println("Searching with "+keyword);
        List<Product> pro=service.searchProducts(keyword);
        return new ResponseEntity<>(pro,HttpStatus.OK);
    }
}
