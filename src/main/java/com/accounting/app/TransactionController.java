package com.accounting.app;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TransactionController {

	@Autowired
	private TransactionService transactionService;

	@PostMapping("/submit")
	public ResponseEntity<String> submitTransaction(@RequestBody TransactionDTO transactionDTO) {
		TransactionEntity transaction = new TransactionEntity();
		transaction.setPropertyId(transactionDTO.getPropertyId());
		transaction.setCategory(transactionDTO.getCategory());
		transaction.setOptionId(transactionDTO.getOptionId());
		transaction.setComment(transactionDTO.getComment());
		transaction.setDate(LocalDate.parse(transactionDTO.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		transaction.setDateAdded(LocalDate.now());
		transaction.setAmount(transactionDTO.getAmount());
		transaction.setPaymentForm(transactionDTO.getPaymentForm());
		transactionService.saveTransaction(transaction);
		return ResponseEntity.ok(null);
	}

	@GetMapping("/transactions")
	public ResponseEntity<List<TransactionEntity>> getAllTransactions() {
		List<TransactionEntity> transactions = transactionService.getAllTransactions();
		return ResponseEntity.ok(transactions);
	}

	@PostMapping("/filter-transactions")
	public ResponseEntity<List<TransactionEntity>> filterTransactions(@RequestBody TransactionFilterDTO filter) {
		List<TransactionEntity> transactions = transactionService.filterTransactions(filter);
		return ResponseEntity.ok(transactions);
	}

	@DeleteMapping("/transactions/{id}")
	public ResponseEntity<String> deleteTransaction(@PathVariable Long id) {
		transactionService.deleteTransaction(id);
		return ResponseEntity.ok(null);
	}

	@PutMapping("/transactions/{id}")
	public ResponseEntity<TransactionEntity> updateTransaction(@PathVariable Long id,
			@RequestBody TransactionDTO transactionDTO) {
		System.out.println(transactionDTO);
		TransactionEntity transaction = new TransactionEntity();
		transaction.setTransactionId(id);
		transaction.setPropertyId(transactionDTO.getPropertyId());
		transaction.setCategory(transactionDTO.getCategory());
		transaction.setOptionId(transactionDTO.getOptionId());
		transaction.setComment(transactionDTO.getComment());
		transaction.setDate(LocalDate.parse(transactionDTO.getDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		transaction.setDateAdded(LocalDate.now());
		transaction.setAmount(transactionDTO.getAmount());
		transaction.setPaymentForm(transactionDTO.getPaymentForm());
		TransactionEntity updatedTransaction = transactionService.updateTransaction(transaction);
		return ResponseEntity.ok(updatedTransaction);
	}
}