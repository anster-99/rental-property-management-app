package com.accounting.app;

public class TransactionFilterDTO {
	private String category;
	private String propertyId;
	private String optionId;
	private String dateStart;
	private String dateEnd;
	private String paymentForm;

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}

	public String getOptionId() {
		return optionId;
	}

	public void setOptionId(String optionId) {
		this.optionId = optionId;
	}

	public String getDateStart() {
		return dateStart;
	}

	public void setDateStart(String dateStart) {
		this.dateStart = dateStart;
	}

	public String getDateEnd() {
		return dateEnd;
	}

	public void setDateEnd(String dateEnd) {
		this.dateEnd = dateEnd;
	}

	public String getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(String paymentForm) {
		this.paymentForm = paymentForm;
	}
}