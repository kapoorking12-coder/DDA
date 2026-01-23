import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { courses } from '@/lib/Metadata';

const CourseSelector = ({ onSelect }: { onSelect: (course: string) => void }) => {
  const [selectedCourse, setSelectedCourse] = React.useState('');

  const handleSelect = (course: string) => {
    setSelectedCourse(course);
    onSelect(course);
  };

  return (
    
    <Select value={selectedCourse} onValueChange={handleSelect} >
      <SelectTrigger>
        <SelectValue placeholder="Select a course" />
      </SelectTrigger>
      <SelectContent>
        {courses.map((course) => (
          <SelectItem key={course.id} value={course.title}>
            {course.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CourseSelector;