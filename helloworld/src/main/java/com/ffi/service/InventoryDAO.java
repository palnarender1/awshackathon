package com.ffi.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.amazonaws.services.lambda.runtime.Context;
import com.ffi.model.Inventory;

public class InventoryDAO {

	public static void main(String arg[]) throws Exception {

		System.out.println(""+new InventoryDAO().getInventories1());

	}

	public List<Inventory> getInventories(Context context){

		
		List<Inventory> inventoryList = new ArrayList<Inventory>();

		try {
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://ffidb.ckzplq92bcuo.us-east-2.rds.amazonaws.com:3306/ffi", "admin", "Admin123");
		Statement stmt = conn.createStatement();
		ResultSet result = stmt.executeQuery("SELECT * FROM INVENTORY");
		while (result.next()) {
			Inventory inventory = new Inventory();
			inventory.setId(result.getInt("ID"));
			inventory.setName(result.getString("NAME"));
			inventory.setDesc(result.getString("DESC"));
			inventory.setLob(result.getString("LOB"));
			inventory.setSublob(result.getString("SUBLOB"));
			inventoryList.add(inventory);
		}
		stmt.close();
		conn.close();
		}catch(Exception e) {
			context.getLogger().log(e.toString());
			e.printStackTrace();
		}

		return inventoryList;
	}
	
	public List<Inventory> getInventories1(){

		List<Inventory> inventoryList = new ArrayList<Inventory>();

		for(int i=1;i<10;i++) {
			Inventory inventory = new Inventory();
			inventory.setId(i);
			inventory.setName("NAME"+i);
			inventory.setDesc("DESC"+i);
			inventory.setLob("LOB"+i);
			inventory.setSublob("SUBLOB"+i);
			inventoryList.add(inventory);
			
		}
		

		return inventoryList;
	}

}
