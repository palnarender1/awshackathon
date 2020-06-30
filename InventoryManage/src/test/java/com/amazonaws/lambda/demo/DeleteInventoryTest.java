package com.amazonaws.lambda.demo;

import java.io.IOException;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import com.amazonaws.services.lambda.runtime.Context;

/**
 * A simple test harness for locally invoking your Lambda function handler.
 */
public class DeleteInventoryTest {

    private static Inventory input;

    @BeforeClass
    public static void createInput() throws IOException {
        // TODO: set up your sample input object here.
        input = new Inventory();
        input.setId(11);
    }

    private Context createContext() {
        TestContext ctx = new TestContext();

        // TODO: customize your context here if needed.
        ctx.setFunctionName("Your Function Name");

        return ctx;
    }

    @Test
    public void testDeleteInventory() {
        DeleteInventory handler = new DeleteInventory();
        Context ctx = createContext();

        Boolean output = handler.handleRequest(input, ctx);

        // TODO: validate output here if needed.
        Assert.assertEquals(true, output);
    }
}
