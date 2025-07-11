import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Edit2, Filter, Search, ChevronDown, Home, FileText, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import "@/styles/adminTheme.css";

interface FormData {
  id: string;
  projectType: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

const Admin = () => {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newFormData, setNewFormData] = useState<FormData>({
    id: "",
    projectType: "",
    fullName: "",
    email: "",
    phone: "",
    createdAt: "",
  });
  const [filters, setFilters] = useState({
    type: "all",
    dateRange: "all",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = () => {
    try {
      const data = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      setFormData(data);
    } catch (error) {
      console.error("Error loading form data:", error);
      toast.error("Error loading form submissions");
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newEntry = {
        ...newFormData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };

      const currentData = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      const updatedData = [...currentData, newEntry];
      localStorage.setItem("formSubmissions", JSON.stringify(updatedData));
      
      setFormData(updatedData);
      setNewFormData({
        id: "",
        projectType: "",
        fullName: "",
        email: "",
        phone: "",
        createdAt: "",
      });
      toast.success("Form submission added successfully!");
    } catch (error) {
      console.error("Error saving form data:", error);
      toast.error("Error saving form submission");
    }
  };

  const handleDelete = (id: string) => {
    try {
      const currentData = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      const updatedData = currentData.filter((item: FormData) => item.id !== id);
      localStorage.setItem("formSubmissions", JSON.stringify(updatedData));
      setFormData(updatedData);
      toast.success("Form submission deleted successfully!");
    } catch (error) {
      console.error("Error deleting form data:", error);
      toast.error("Error deleting form submission");
    }
  };

  const filteredData = formData.filter(item => {
    const matchesSearch = item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm);
    
    const matchesType = filters.type === "all" || 
      (filters.type === "house" && item.projectType === "house") ||
      (filters.type === "apartment" && item.projectType === "apartment");

    return matchesSearch && matchesType;
  });

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <nav className="admin-sidebar">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-admin-primary flex items-center justify-center">
            <span className="text-xl font-bold text-admin-text-primary">E</span>
          </div>
          <h1 className="text-2xl font-bold text-admin-text-primary">EcoCallity Admin</h1>
        </div>
        <div className="space-y-2">
          <a href="/admin" className="flex items-center gap-2 p-3 rounded-lg hover:bg-admin-surface-alt">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="/admin/submissions" className="flex items-center gap-2 p-3 rounded-lg bg-admin-surface-alt">
            <FileText className="w-5 h-5" />
            <span>Form Submissions</span>
          </a>
          <a href="/admin/settings" className="flex items-center gap-2 p-3 rounded-lg hover:bg-admin-surface-alt">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-content">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-admin-text-primary">Form Submissions</h1>
          <Dialog>
            <DialogTrigger asChild>
              <button className="admin-action-button admin-action-button-primary flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Submission
              </button>
            </DialogTrigger>
            <DialogContent className="admin-card">
              <DialogHeader>
                <DialogTitle>Add New Form Submission</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      value={newFormData.projectType}
                      onChange={(e) => setNewFormData({ ...newFormData, projectType: e.target.value })}
                      className="w-full p-3 border rounded-lg bg-admin-surface"
                    >
                      <option value="">Select Project Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={newFormData.fullName}
                      onChange={(e) => setNewFormData({ ...newFormData, fullName: e.target.value })}
                      className="w-full p-3 border rounded-lg bg-admin-surface"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newFormData.email}
                      onChange={(e) => setNewFormData({ ...newFormData, email: e.target.value })}
                      className="w-full p-3 border rounded-lg bg-admin-surface"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={newFormData.phone}
                      onChange={(e) => setNewFormData({ ...newFormData, phone: e.target.value })}
                      className="w-full p-3 border rounded-lg bg-admin-surface"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="admin-action-button admin-action-button-primary">
                    Add Submission
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="admin-filter mb-8">
          <div className="relative">
            <Input
              placeholder="Search submissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-80 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-admin-text-muted" />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleFilterChange('type', 'all')}
              className={`admin-filter-item ${filters.type === 'all' ? 'bg-admin-accent text-admin-text-primary' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterChange('type', 'house')}
              className={`admin-filter-item ${filters.type === 'house' ? 'bg-admin-accent text-admin-text-primary' : ''}`}
            >
              Houses
            </button>
            <button
              onClick={() => handleFilterChange('type', 'apartment')}
              className={`admin-filter-item ${filters.type === 'apartment' ? 'bg-admin-accent text-admin-text-primary' : ''}`}
            >
              Apartments
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="admin-card">
          <table className="admin-table w-full">
            <thead>
              <tr>
                <th>Project Type</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className={`admin-badge ${item.projectType === 'house' ? 'admin-badge-success' : 'admin-badge-warning'}`}>
                      {item.projectType === 'house' ? 'House' : 'Apartment'}
                    </span>
                  </td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        className="admin-action-button admin-action-button-secondary"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
