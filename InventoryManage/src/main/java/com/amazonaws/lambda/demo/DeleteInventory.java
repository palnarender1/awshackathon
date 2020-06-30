package com.amazonaws.lambda.demo;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class DeleteInventory implements RequestHandler<Inventory, Boolean> {

    @Override
    public Boolean handleRequest(Inventory input, Context context) {
        context.getLogger().log("Input: " + input);

        return new InventoryDAO().deleteInventory(input.getId(), context);
    }

}
