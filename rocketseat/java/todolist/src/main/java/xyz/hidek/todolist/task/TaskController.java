package xyz.hidek.todolist.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {
  @Autowired
  private ITaskRepository taskRepository;

  @PostMapping("")
  public TaskModel create(@RequestBody TaskModel taskModel) {
    System.out.println("Chegou no controller");
    var createdTask = this.taskRepository.save(taskModel);
    return createdTask;
  }
}
