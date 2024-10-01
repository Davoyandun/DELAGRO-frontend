import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
interface IFilterProps {
  title: string;
  filters: string[];
}
export default function Filter({ title, filters }: IFilterProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <List>
          {filters.map((filter, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={filter} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
