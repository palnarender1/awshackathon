package com.ffi.model;

public class Inventory {

	private int id;
	private String name;
	private String desc;
	private String lob;
	private String sublob;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getLob() {
		return lob;
	}
	public void setLob(String lob) {
		this.lob = lob;
	}
	public String getSublob() {
		return sublob;
	}
	public void setSublob(String sublob) {
		this.sublob = sublob;
	}
	
	
	@Override
	public String toString() {
		return "Inventory [id=" + id + ", name=" + name + ", desc=" + desc + ", lob=" + lob + ", sublob=" + sublob
				+ "]";
	}
	

}
