package com.accounting.app;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "transactions")
public class TransactionEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transactionId;

	@Column(nullable = false)
	private String propertyId;

	@Column(nullable = false)
	private String category;

	@Column(nullable = false)
	private String optionId;

	@Column
	private String comment;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate date;

	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate dateAdded;

	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate dateModified;

	@Column(nullable = false, precision = 10, scale = 2)
	private BigDecimal amount;

	@Column(nullable = false)
	private String paymentForm;

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public String getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(String propertyIdId) {
		this.propertyId = propertyIdId;
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

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalDate getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(LocalDate dateAdded) {
		this.dateAdded = dateAdded;
	}

	public LocalDate getDateModified() {
		return dateModified;
	}

	public void setDateModified(LocalDate dateModified) {
		this.dateModified = dateModified;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(String paymentForm) {
		this.paymentForm = paymentForm;
	}
}