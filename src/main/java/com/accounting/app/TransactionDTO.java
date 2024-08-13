package com.accounting.app;

import java.math.BigDecimal;

public class TransactionDTO {
	private String propertyId;
	private String category;
	private String optionId;
	private String comment;
	private String date;
	private BigDecimal amount;
	private String paymentForm;

	public String getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getOptionId() {
		return optionId;
	}

	public void setOptionId(String optionId) {
		this.optionId = optionId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(String paymentForm) {
		this.paymentForm = paymentForm;
	}

	@Override
	public String toString() {
		return "TransactionDTO [propertyId=" + propertyId + ", category=" + category + ", optionId=" + optionId
				+ ", comment=" + comment + ", date=" + date + ", amount=" + amount + ", paymentForm=" + paymentForm
				+ "]";
	}
}
