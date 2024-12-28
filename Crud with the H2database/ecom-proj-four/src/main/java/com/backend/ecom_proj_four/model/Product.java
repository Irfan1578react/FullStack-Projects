package com.backend.ecom_proj_four.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @JsonProperty("description")
    private String description;
    private String brand;
    private BigDecimal price;
    private String category;
    @JsonProperty("releaseDate")
    private Date releaseDate;
    @JsonProperty("productAvailable")
    private boolean ProductAvailable;
    @JsonProperty("stockQuantity")
    private int StockQuantity;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

    public int getId() {
        return id;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public Product(int id, String name, String description, String brand, BigDecimal price, String category, Date releaseDate, boolean ProductAvailable, int StockQuantity, String imageName, String imageType, byte[] imageData) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.category = category;
        this.releaseDate = releaseDate;
        this.ProductAvailable = ProductAvailable;
        this.StockQuantity = StockQuantity;
        this.imageName = imageName;
        this.imageType = imageType;
        this.imageData = imageData;
    }


    public Product() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return description;
    }

    public void setDesc(String description) {
        this.description = description;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getReleasedate() {
        return releaseDate;
    }

    public void setReleasedate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public boolean isAvailable() {
        return ProductAvailable;
    }

    public void setAvailable(boolean ProductAvailable) {
        this.ProductAvailable = ProductAvailable;
    }

    public int getQuantity() {
        return StockQuantity;
    }

    public void setQuantity(int StockQuantity) {
        this.StockQuantity = StockQuantity;
    }
}
