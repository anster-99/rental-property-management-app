package com.accounting.app;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TransactionRepository extends JpaRepository<TransactionEntity, Long> {

	@Query("SELECT t FROM TransactionEntity t WHERE "
			+ "(:category IS NULL OR :category = '' OR t.category = :category) AND "
			+ "(:propertyId IS NULL OR :propertyId = '' OR t.propertyId = :propertyId) AND "
			+ "(:optionId IS NULL OR :optionId = '' OR t.optionId = :optionId) AND "
			+ "(:paymentForm is NULL OR :paymentForm = '' OR t.paymentForm = :paymentForm) AND "
			+ "(:dateStart IS NULL OR t.date >= :dateStart) AND " + "(:dateEnd IS NULL OR t.date <= :dateEnd) ")
	List<TransactionEntity> findByCriteria(@Param("category") String category, @Param("propertyId") String propertyId,
			@Param("optionId") String optionId, @Param("dateStart") LocalDate dateStart,
			@Param("dateEnd") LocalDate dateEnd, @Param("paymentForm") String paymentForm);
}
