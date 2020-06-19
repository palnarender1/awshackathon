package com.ffi.service;

import java.util.List;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.ffi.model.Inventory;

public class InventoryService implements RequestHandler<Object, List<Inventory>>{
	
	@Override
	public List<Inventory> handleRequest(Object input, Context context) {
	
		LambdaLogger LOGGER = context.getLogger();
		LOGGER.log("STARTING INVENTORY SERVICE");
		return new InventoryDAO().getInventories(context);
	}



}
