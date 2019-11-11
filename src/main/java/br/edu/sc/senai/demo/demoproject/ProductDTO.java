package br.edu.sc.senai.demo.demoproject;

public final class ProductDTO {

	public static final ProductDTO NULL_VALUE = new ProductDTO("", "", Double.valueOf(0.0));

	private final String name;
	private final String description;
	private final Double price;

	public ProductDTO(final String name, final String description, final Double price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}

	public String getName() {
		return this.name;
	}

	public String getDescription() {
		return this.description;
	}

	public Double getPrice() {
		return this.price;
	}

}
