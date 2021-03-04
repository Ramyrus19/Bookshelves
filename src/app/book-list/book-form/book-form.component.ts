import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  // tslint:disable-next-line:typedef
  private initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  onSaveBook(){
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const newBook = new Book(title, author);
    if (this.fileUrl && this.fileUrl !== ''){
      newBook.photo = this.fileUrl;
    }
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

  // tslint:disable-next-line:typedef
  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  // tslint:disable-next-line:typedef
  detectFiles(event){
    this.onUploadFile(event.target.files[0]);
  }
}
