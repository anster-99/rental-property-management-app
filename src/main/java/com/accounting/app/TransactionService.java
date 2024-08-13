package com.accounting.app;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

	@Autowired
	private TransactionRepository transactionRepository;

	public void saveTransaction(TransactionEntity transaction) {
		transaction.setDateAdded(LocalDate.now());
		transactionRepository.save(transaction);
	}

	public List<TransactionEntity> getAllTransactions() {
		return transactionRepository.findAll();
	}

	public List<TransactionEntity> filterTransactions(TransactionFilterDTO filter) {
		LocalDate dateStart = null;
		if (filter.getDateStart() != null && !filter.getDateStart().isEmpty()) {
			dateStart = LocalDate.parse(filter.getDateStart(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		}
		LocalDate dateEnd = null;
		if (filter.getDateEnd() != null && !filter.getDateEnd().isEmpty()) {
			dateEnd = LocalDate.parse(filter.getDateEnd(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		}
		return transactionRepository.findByCriteria(filter.getCategory(), filter.getPropertyId(), filter.getOptionId(),
				dateStart, dateEnd, filter.getPaymentForm());
	}

	public void deleteTransaction(Long transactionId) {
		transactionRepository.deleteById(transactionId);
	}

	public TransactionEntity updateTransaction(TransactionEntity transaction) {
		if (transactionRepository.existsById(transaction.getTransactionId())) {
			transaction.setDateModified(LocalDate.now());
			return transactionRepository.save(transaction);
		} else {
			throw new RuntimeException("Transaction not found");
		}
	}
}
